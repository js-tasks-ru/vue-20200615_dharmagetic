export const MeetupInfo = {
  template: `<ul class="info-list">
            <li>
              <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg"/>
              {{ meetup.organizer }}
            </li>
            <li>
              <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg"/>
              {{ meetup.place }}
            </li>
            <li>
              <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg"/>
              <time :datetime="meetupLocaleDate">{{ meetupLocaleDate }}</time>
            </li>
          </ul>`,

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  computed: {
    meetupLocaleDate() {
      return new Date(this.meetup.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
};
