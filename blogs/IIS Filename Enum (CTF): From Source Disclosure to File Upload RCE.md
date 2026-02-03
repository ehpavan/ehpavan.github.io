# IIS Filename Enum (CTF): From Source Disclosure to File Upload RCE 
## TL;DR
This [CTF](https://app.hackinghub.io/hubs/iis-filename-enum) demonstrates how IIS filename enumeration can be abused to uncover archived source code, leading to credential disclosure and full Remote Code Execution (RCE). By enumerating IIS shortnames, sensitive application files were identified and extracted, revealing internal API logic and hardcoded credentials. Chaining this with an insecure file upload and unsafe command execution resulted in complete server compromise.

# Initial Recon
