#!/bin/sh

cmd=$@
echo "Running '$cmd'!"
if $cmd; then
    echo "Success: '$cmd'"
else
    exit_code=$?
    echo "Failed: '$cmd', exited with $exit_code"
    exit $exit_code
fi