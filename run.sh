#!/bin/bash
cd "$(dirname "$0")"
python3 -c "import flask, requests, aiohttp" 2>/dev/null || pip install -r requirements.txt -q 2>/dev/null || true
PORT=${PORT:-8000} python3 main.py
