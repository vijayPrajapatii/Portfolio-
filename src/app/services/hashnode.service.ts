import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HashnodeService {

  private graphqlUrl = 'https://gql.hashnode.com/';

  constructor(private http: HttpClient) { }

  getBlogPosts(): Observable<any> {
    const query = `
      query {
        publication(host: "vijayprajapati.hashnode.dev") {
          posts(first: 20) {
            edges {
              node {
                id
                title
                slug
                brief
                content {
                  markdown
                }
                coverImage {
                  url
                }
                publishedAt
                url
              }
            }
          }
        }
      }
    `;

    return this.http.post<any>(this.graphqlUrl, { query });
  }
}
