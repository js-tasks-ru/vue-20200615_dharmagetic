export const MeetupCover = {
  template: `<div class="meetup-cover" :style="getMeetupCoverStyle">
        <h1 class="meetup-cover__title">
          {{ title }}
        </h1>
    </div>`,

  props: {
    link: {
      type: String,
    },
    title: {
      type: String,
    },
  },

  computed: {
    getMeetupCoverStyle() {
      return {
        '--bg-url': this.link ? `url(${this.link})` : '',
      };
    },
  },
};
