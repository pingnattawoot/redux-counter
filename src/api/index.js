'use strict';
import {Config} from '../config.js';
import SearchService from './search';
exports.searchService = new SearchService(Config.urls.search);