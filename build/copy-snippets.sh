#!/bin/bash

DIR=server/dist/modes/ddx/ddxSnippets

if [ -d "$DIR" ]; then
  rm -r "$DIR"
fi

cp -r server/src/modes/ddx/ddxSnippets server/dist/modes/ddx/ddxSnippets
