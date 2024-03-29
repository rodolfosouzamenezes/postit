export const apiRoutes = {
  auth: {
    login: '/auth/login',
  },
  notes: {
    me: '/note/me',
    create: '/note',
    delete: '/note/{noteId}',
    update: '/note/{noteId}',
    feed: '/note/feed',
    mypublicNotes: '/note/feed/{userId}',
    get: '/note/{noteId}',
    like: {
      create: '/note/{noteId}/like',
      delete: '/note/{noteId}/like',
    },
    comment: {
      create: '/note/{noteId}/comment',
    }
  },
  users: {
    create: '/user',
    get: '/user/{userId}',
  }
} as const;
