# -*- coding: utf-8 -*-
"""Build SSH share URIs with explicit V2Box-compatible UDPGW setting."""
import urllib.parse


def build_ssh_uri(username: str, password: str, host: str, port: int, remark: str) -> str:
    username = str(username or "").strip()
    password = str(password or "")
    host = str(host or "").strip()
    if not username or not password or not host:
        raise ValueError("SSH URI requires username, password, and host")
    if ":" in host and not host.startswith("["):
        host = f"[{host}]"
    user = urllib.parse.quote(username, safe="")
    secret = urllib.parse.quote(password, safe="")
    label = urllib.parse.quote(str(remark or "SSH"), safe="")
    return f"ssh://{user}:{secret}@{host}:{int(port)}?udpgw=0#{label}"
