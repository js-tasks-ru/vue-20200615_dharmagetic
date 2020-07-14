import { MeetupCover } from './MeetupCover.js';
import { MeetupDescription } from './MeetupDescription.js';
import { MeetupAgenda } from './MeetupAgenda.js';
import { MeetupInfo } from './MeetupInfo.js';

export const MeetupView = {
  name: 'MeetupView',

  template: `
    <div>
      <meetup-cover :link="meetup.cover" :title="meetup.title"></meetup-cover>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description"></meetup-description>
            <meetup-agenda :agenda="meetup.agenda"></meetup-agenda>
          </div>
          <div class="meetup__aside">
            <meetup-info :meetup="meetup"></meetup-info>
          </div>
        </div>
      </div>
    </div>`,

  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
};
