module.exports = {
    async beforeCreate(event) {
      const { data, user } = event.params;
  
      // Prevent auto-publishing
      if (user && user.role && user.role.name !== 'Super Admin') {
        data.publication_state = 'pending';
      }
  
      // Auto-assign author
      if (user) {
        data.posted_by = user.id;
      }
    },
  
    async beforeUpdate(event) {
      const { data, user } = event.params;
  
      if (user && user.role && user.role.name !== 'Super Admin') {
        if (data.publication_state === 'published') {
          throw new Error("Only admins can publish blog posts.");
        }
      }
    }
  };
  