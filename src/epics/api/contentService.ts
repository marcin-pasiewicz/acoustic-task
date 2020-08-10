import {request} from './ajax'
import { API_BASE_URL } from '../../config/api';

export function getContent(id: string) {
  return request(`${API_BASE_URL}/content/${id}`);
}