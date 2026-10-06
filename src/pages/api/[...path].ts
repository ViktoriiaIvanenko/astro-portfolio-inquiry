import type {APIRoute} from 'astro';
import {handle} from '../../core/http.js';
export const POST:APIRoute=({request,clientAddress})=>handle(request,clientAddress);
