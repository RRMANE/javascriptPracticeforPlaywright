let status_code = 401;
if (status_code == 200){
    console.log("PASS - OK: Request successful")
}
else if (status_code == 201){
    console.log("PASS - Created: Resource created successfully")
}
else if (status_code == 301){
    console.log("WARNING - Moved Permanently: URL has changed")
}
else if (status_code ==400){
    console.log("FAIL - Bad Request: Check request payload")
}
else if (status_code == 401){
    console.log("Status Code : 401 Result : FAIL - Unauthorized: Check auth token")
}
else if (status_code ==403){
    console.log("FAIL - Forbidden: Insufficient permissions")
}
else if (status_code ==404){
    console.log("FAIL - Not Found: Check endpoint URL")
}
else if (status_code ==500){
    console.log("FAIL - Internal Server Error: Backend issue")
}
else{
    console.log("UNKNOWN - Unhandled status code");
}
