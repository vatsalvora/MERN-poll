#!/bin/bash
cd ui
yarn build
cd ../
rm -rf public/*
cp -rf ui/build/* public