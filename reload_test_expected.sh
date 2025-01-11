#!/bin/bash

# When we are making fundamental changes to the generator, we may need to update all of the expected files in our test suite.
# We want to go through each directory in the /tests folder.  Inside each directory, there should be a folder called expected. If there is ALSO a folder called __TEST_TMP__, we will delete the `expected` folder and rename the `__TEST_TMP__` folder to `expected`.

# How to run:

# Script Usage Instructions
# -----------------------
#
# 1. Make the script executable:
#    chmod +x script_name.sh
#
# 2. Run the script using one of these methods:
#    - ./script_name.sh
#    - bash script_name.sh
#    - sh script_name.sh
#
# Note: Replace 'script_name.sh' with the actual name of your script
#
# If you encounter a "Permission denied" error:
# - Check if the file has execute permissions
# - Use 'chmod +x script_name.sh' to add execute permissions
#
# The script should be run from the directory where it's located
# or provide the full path to the script

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Navigate to the tests directory
cd "$SCRIPT_DIR/tests" || exit 1

# Find all directories containing both 'expected' and '__TEST_TMP__' folders
for dir in */; do
    if [ -d "${dir}expected" ] && [ -d "${dir}__TEST_TMP__" ]; then
        echo "Processing ${dir}..."
        # Delete schema.prisma if it exists in __TEST_TMP__
        rm -f "${dir}__TEST_TMP__/schema.prisma"
        rm -rf "${dir}expected"
        mv "${dir}__TEST_TMP__" "${dir}expected"
    fi
done

echo "Reload complete"
