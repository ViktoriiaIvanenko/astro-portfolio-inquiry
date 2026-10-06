import type {APIRoute} from 'astro';
import {handle} from '../../core/http.js';
export const GET:APIRoute=({request,clientAddress})=>handle(request,clientAddress);
