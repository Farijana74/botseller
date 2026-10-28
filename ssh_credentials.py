# -*- coding: utf-8 -*-
"""Encrypt/decrypt SSH passwords at rest for user self-service delivery.

The Fernet key is supplied through SHOPVPN_SSH_CREDENTIAL_KEY and must be the
same for the bot, web panel and maintenance CLI. Never store the key in SQLite.
"""
from __future__ import annotations
import os
from cryptography.fernet import Fernet, InvalidToken


def _fernet() -> Fernet:
    key = os.getenv("SHOPVPN_SSH_CREDENTIAL_KEY", "").strip().encode("ascii", "ignore")
    if not key:
        raise RuntimeError(
            "SHOPVPN_SSH_CREDENTIAL_KEY تنظیم نشده است؛ برای ذخیره امن رمز SSH، "
            "یک کلید Fernet بسازید و در environment بات و پنل وب قرار دهید."
        )
    try:
        return Fernet(key)
    except (ValueError, TypeError) as exc:
        raise RuntimeError("SHOPVPN_SSH_CREDENTIAL_KEY باید یک کلید معتبر Fernet باشد.") from exc


def encrypt_credential(value: str) -> str:
    if not isinstance(value, str) or not value:
        raise ValueError("رمز SSH خالی است.")
    return _fernet().encrypt(value.encode("utf-8")).decode("ascii")


def decrypt_credential(value: str) -> str:
    if not value:
        raise RuntimeError("برای این حساب رمز رمزگذاری‌شده‌ای ذخیره نشده است؛ با پشتیبانی تماس بگیرید.")
    try:
        return _fernet().decrypt(str(value).encode("ascii")).decode("utf-8")
    except InvalidToken as exc:
        raise RuntimeError("رمز SSH قابل بازیابی نیست؛ کلید رمزگذاری تغییر کرده یا نامعتبر است.") from exc
