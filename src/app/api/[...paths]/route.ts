import { NextRequest, NextResponse } from "next/server"

const apiBase = process.env.API_URI || ''
const handler = async (req: NextRequest, { params }: { params: { paths: string[] } }) => {

  const method = req.method
  const {paths} = params

  const paramString = req.nextUrl.searchParams.toString()

  let payload = null

  let header: {[key: string]: string}  = {
    Referer: req.headers.get('referer') ?? ''
  }

  if(paths[0].includes('reviews')){
    if(paths.includes('password-verification')) {
      payload = await req.json()
      payload = JSON.stringify(payload)
      header['Content-Type'] = 'application/json'
    }else if((method === 'PUT' || method === 'DELETE')){
      payload = await req.formData()
      header["Verify-Token"] = payload.get('token')?.toString() ?? ''
    }else if(method !== 'GET'){
      payload = await req.formData()
    }
  }else {
    if (method === 'DELETE') {
      const contentType = req.headers.get('Content-Type')
      if (contentType?.includes('application/json')) {
        payload = await req.json()
      }
    } else if (method !== 'GET') {
      payload = await req.formData()
    }
  }

  // console.log('payload', payload)

  const url = `${apiBase}/${paths.join("/")}?${paramString}`
  // console.log('url',url)

  const options = {
    method: method,
    body: payload
    ? payload
    : null,
    headers: header
  }

  const response = await fetch(url, {...options})
   // console.log('response', response)

  if (!response.ok) {
    const errormsg = await response.json()
    return NextResponse.json(
      errormsg, 
      {
        status: response.status,
      }
    )
  }

  if (method !== 'GET') {
    if(paths.includes('password-verification')){
      return NextResponse.json(await response.json())
    }else {
      return NextResponse.json(await response)
    }
  }else {
    return NextResponse.json(await response.json())
  }

  // return NextResponse.json(data)
}

export { handler as DELETE, handler as GET, handler as POST, handler as PUT }
