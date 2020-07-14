import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',

  template: `
  <div v-if="meetup">
    <meetup-view :meetup="meetup">
    </meetup-view>
  </div>`,

  components: {
    MeetupView,
  },

  data() {
    return {
      meetup: null,
    };
  },

  async mounted() {
    let _meetup = await fetchMeetup(MEETUP_ID);
    _meetup = this.prepareMeetup(_meetup);

    this.meetup = _meetup;
  },

  methods: {
    prepareMeetup(meetup) {
      return {
        ...meetup,
        cover: meetup.imageId
          ? `https://course-vue.javascript.ru/api/images/${meetup.imageId}`
          : undefined,
      };
    },
  },
};
