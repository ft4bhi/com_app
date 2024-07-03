function Read-Files {
    param ($path)
    
    Get-ChildItem -LiteralPath $path -Recurse | ForEach-Object {
        if ($_.PSIsContainer) {
            Read-Files -path $_.FullName
        }
        else {
            $should_ignore = $false
            foreach ($ignore_pattern in $ignore_files) {
                if ($_.Name -like $ignore_pattern) {
                    $should_ignore = $true
                    break
                }
            }
            if (-not $should_ignore) {
                $relative_path = $_.FullName.Substring($project_dir.Path.Length + 1)
                Add-Content $output_file "// File: $relative_path"
                Get-Content -LiteralPath $_.FullName | Add-Content $output_file
                Add-Content $output_file ""
            }
        }
    }
}