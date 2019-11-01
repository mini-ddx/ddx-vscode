#!/bin/bash

DIR=server/dist/modes/vue/ddxSnippets

if [ -d "$DIR" ]; then
  rm -r "$DIR"
fi

cp -r server/src/modes/vue/ddxSnippets server/dist/modes/vue/ddxSnippets
