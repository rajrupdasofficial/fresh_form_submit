// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $admin_auth_login from "./routes/admin/auth/login.tsx";
import * as $admin_index from "./routes/admin/index.tsx";
import * as $api_login from "./routes/api/login.ts";
import * as $api_signup from "./routes/api/signup.ts";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $signup from "./routes/signup.tsx";
import * as $user_profile from "./routes/user/profile.tsx";
import * as $userLogin from "./islands/userLogin.tsx";
import * as $userSignup from "./islands/userSignup.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/admin/auth/login.tsx": $admin_auth_login,
    "./routes/admin/index.tsx": $admin_index,
    "./routes/api/login.ts": $api_login,
    "./routes/api/signup.ts": $api_signup,
    "./routes/index.tsx": $index,
    "./routes/login.tsx": $login,
    "./routes/signup.tsx": $signup,
    "./routes/user/profile.tsx": $user_profile,
  },
  islands: {
    "./islands/userLogin.tsx": $userLogin,
    "./islands/userSignup.tsx": $userSignup,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
