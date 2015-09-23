import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  headline: DS.attr(),
  article: DS.attr(),
  photo: DS.attr(),
  caption: DS.attr(),
  date: DS.attr(),
});
