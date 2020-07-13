import { MeetupView } from './MeetupView.js';
import {
  MEETUP_ID,
  fetchMeetup,
  agendaItemIcons,
  agendaItemTitles,
} from './data.js';

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
    _meetup = this.prepareMeetupAgenda(_meetup);

    this.meetup = _meetup;
  },

  methods: {
    prepareMeetup(meetup) {
      return {
        ...meetup,
        cover: meetup.imageId
          ? `https://course-vue.javascript.ru/api/images/${meetup.imageId}`
          : undefined,
        localeDate: new Date(meetup.date).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      };
    },

    prepareMeetupAgenda(meetup) {
      meetup.agenda = meetup.agenda.map((agenda) => ({
        ...agenda,
        icon: `/assets/icons/icon-${agendaItemIcons[agenda.type]}.svg`,
        title: agenda.title ? agenda.title : agendaItemTitles[agenda.type],
        is_talk: agenda.type === 'talk',
      }));

      return meetup;
    },
  },
};
