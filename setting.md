# window local

1. node.js 설치 (v20.10.0)
2. git clone 받기
3. powershell 관리자권한 실행

```bash
Get-ExecutionPolicy
  Restricted 이면 아래 실행
Set-ExecutionPolicy RemoteSigned
y
```

4. 터미널에 pnpm 설치

```bash
npm install -g pnpm
pnpm -v
```

5. 패키지 설치

```bash
pnpm install
```

6. 서버 올리기

```bash
pnpm dev
```

---

API

- local : http://211.56.253.184:10000/swagger-ui/index.html
