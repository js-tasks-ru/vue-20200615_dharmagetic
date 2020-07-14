import { agendaItemIcons, agendaItemTitles } from './data.js';

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template: `
    <div class="meetup-agenda__item">
        <div class="meetup-agenda__item-col">
            <img class="icon" alt="icon" :src="preparedAgendaItem.icon"/>
        </div>
        <div class="meetup-agenda__item-col">{{ preparedAgendaItem.startsAt }} - {{ preparedAgendaItem.endsAt }}</div>
        <div class="meetup-agenda__item-col">
            <h5 class="meetup-agenda__title">{{ preparedAgendaItem.title }}</h5>
            <template v-if="preparedAgendaItem.is_talk">
              <p><span>{{ preparedAgendaItem.speaker }}</span><span class="meetup-agenda__dot"></span><span
                class="meetup-agenda__lang">{{ preparedAgendaItem.language }}</span></p>
            </template>
            <p v-if="preparedAgendaItem.description">{{ preparedAgendaItem.description }}</p>
        </div>
    </div>`,

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    preparedAgendaItem() {
      return {
        ...this.agendaItem,
        icon: `/assets/icons/icon-${agendaItemIcons[this.agendaItem.type]}.svg`,
        title: this.agendaItem.title
          ? this.agendaItem.title
          : agendaItemTitles[this.agendaItem.type],
        is_talk: this.agendaItem.type === 'talk',
      };
    },
  },
};
