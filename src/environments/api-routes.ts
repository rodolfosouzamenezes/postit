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
    like: {
      create: '/note/{noteId}/like',
      delete: '/note/{noteId}/like',
    }
  },
  users: {
    create: '/user',
  }
} as const;
