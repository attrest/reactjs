<?php

header("Content-Type: application/json");
$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

// Remove the /api/ prefix
$apiPrefix = '/api/';
if (substr($uri, 0, strlen($apiPrefix)) === $apiPrefix) {
    $uri = substr($uri, strlen($apiPrefix));
}

// echo "Requested URI: $uri\n";

// Corrected file path
$jsonFilePath = __DIR__ . '/db.json';
// echo '$jsonFilePath => ' . $jsonFilePath;

// URI 분석
$jsonData = json_decode(file_get_contents($jsonFilePath), true);
$uriParts = explode('/', trim($uri, '/'));
$resourceType = $uriParts[0]; // 예: 'todos'
$resourceId = $uriParts[1] ?? null; // 예: '1'

switch ($method) {
    case 'GET':
        if ($resourceId) {
            // 특정 리소스 반환
            foreach ($jsonData[$resourceType] as $item) {
                if ($item['id'] == $resourceId) {
                    echo json_encode($item);
                    exit;
                }
            }
            http_response_code(404);
            echo json_encode(['message' => 'Resource not found']);
        } else {
            // 모든 리소스 반환
            echo json_encode($jsonData[$resourceType], JSON_UNESCAPED_UNICODE);
        }
        break;

    case 'POST':
        // 새 리소스 추가
        $inputData = json_decode(file_get_contents('php://input'), true);
        $jsonData[$resourceType][] = $inputData;
        file_put_contents($jsonFilePath, json_encode($jsonData));
        echo json_encode($inputData, JSON_UNESCAPED_UNICODE);
        break;

    case 'PUT':
    case 'PATCH':
        // 리소스 업데이트
        $inputData = json_decode(file_get_contents('php://input'), true);
        foreach ($jsonData[$resourceType] as $key => $item) {
            if ($item['id'] == $resourceId) {
                $jsonData[$resourceType][$key] = array_merge($item, $inputData);
                file_put_contents($jsonFilePath, json_encode($jsonData));
                echo json_encode($jsonData[$resourceType][$key], JSON_UNESCAPED_UNICODE);
                exit;
            }
        }
        break;

    case 'DELETE':
        // 리소스 삭제
        foreach ($jsonData[$resourceType] as $key => $item) {
            if ($item['id'] == $resourceId) {
                array_splice($jsonData[$resourceType], $key, 1);
                file_put_contents($jsonFilePath, json_encode($jsonData));
                echo json_encode(['message' => 'Resource deleted']);
                exit;
            }
        }
        http_response_code(404);
        echo json_encode(['message' => 'Resource not found']);
        break;

    default:
        http_response_code(405);
        echo json_encode(['message' => 'Method not allowed']);
        break;
}
