export const CounterButton = {
  template: '<button type="button" @click="increment">{{ incrementedCount }}</button>',

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  data: function () {
    return {
      incrementedCount: this.count,
    };
  },

  model: {
    prop: 'count',
    event: 'increment',
  },

  methods: {
    increment: function () {
      this.incrementedCount += 1;
      this.$emit('increment', this.incrementedCount);
    },
  },
};
