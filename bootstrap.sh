#!/bin/bash

# 执行第一个命令
pnpm dev-ui &

# 等待 5 秒钟
sleep 5

# 执行第二个命令
pnpm --filter nutui-solid-site run dev