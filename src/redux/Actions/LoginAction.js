import { START_LOGIN_FLOW, LOGIN_CALLBACK_RECEIVED } from "../Constants";
import { createAction } from "@reduxjs/toolkit";

export const startLoginFlow = createAction(START_LOGIN_FLOW);
export const callbackReceived = createAction(LOGIN_CALLBACK_RECEIVED);
