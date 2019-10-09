module.exports = {
  inputs: {
    id: {
      type: 'json',
      custom: value => _.isString(value) || _.isArray(value),
      required: true
    }
  },

  fn: async function(inputs, exits) {
    const projectMemberships = await sails.helpers.getProjectMemberships({
      projectId: inputs.id
    });

    return exits.success(projectMemberships);
  }
};
