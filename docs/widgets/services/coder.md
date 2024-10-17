---
title: Coder
description: Open-source cloud development environments
---

Learn more about [Coder](https://github.com/coder/coder).

You'll need to create API Tokens. Follow the official documentation steps here: [Sessions & API Tokens](https://coder.com/docs/admin/users/sessions-tokens)

Allowed fields: `["pending", "building", "running", "stopped", "failed", "total"]`.

```yaml
widget:
  type: coder
  url: https://coder.host.or.ip:8080
  key: 1A2b3C4d5E-1a2B3c4D5e6F7g8H9i10K1
  fields: ["running", "stopped", "total"]
```
