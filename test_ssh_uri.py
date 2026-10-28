import unittest
from urllib.parse import urlsplit, unquote
from ssh_uri import build_ssh_uri


class SSHUriTests(unittest.TestCase):
    def test_uri_contains_credentials_and_explicit_udpgw(self):
        uri = build_ssh_uri("fff_user", "P4ss_word-123", "31.56.196.63", 38331, "Fff")
        parsed = urlsplit(uri)
        self.assertEqual(parsed.scheme, "ssh")
        self.assertEqual(parsed.hostname, "31.56.196.63")
        self.assertEqual(parsed.port, 38331)
        self.assertEqual(unquote(parsed.username), "fff_user")
        self.assertEqual(unquote(parsed.password), "P4ss_word-123")
        self.assertEqual(parsed.query, "udpgw=0")
        self.assertEqual(unquote(parsed.fragment), "Fff")

    def test_ipv6_is_bracketed(self):
        parsed = urlsplit(build_ssh_uri("user", "password1234567890", "2001:db8::1", 2200, "v6"))
        self.assertEqual(parsed.hostname, "2001:db8::1")
        self.assertEqual(parsed.port, 2200)

    def test_missing_credentials_fail_closed(self):
        with self.assertRaises(ValueError):
            build_ssh_uri("user", "", "127.0.0.1", 22, "x")


if __name__ == "__main__":
    unittest.main()
