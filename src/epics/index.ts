import { ActionsTypes } from '../actions';
import 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import {ofType} from 'redux-observable';
import { of } from 'rxjs';
import { getContent } from './api/contentService';
import { ResponseError } from '../models/ResponseError';
import { fetchContentFulfilled, fetchContentRejected } from '../actions';


export const fetchContentEpic = (action$: any) =>
  action$.pipe(
    ofType(ActionsTypes.FETCH_CONTENT),
    mergeMap((action: any) =>
    getContent(action.payload).pipe(
        map(({ response }: any) => fetchContentFulfilled(response)),
        catchError((error: ResponseError) => of(fetchContentRejected(error)))
      )
    )
  );  