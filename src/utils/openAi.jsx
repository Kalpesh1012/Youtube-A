/* eslint-disable no-unused-vars */
import React from "react";
import OpenAI from "openai";
import { OPEN_APIKEY } from "./constants";

const openai = new OpenAI({
  apiKey: OPEN_APIKEY,
  dangerouslyAllowBrowser: true, // defaults to process.env["OPENAI_API_KEY"]
});

export default openai;
