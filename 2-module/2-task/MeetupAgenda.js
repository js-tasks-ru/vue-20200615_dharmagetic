import { MeetupAgendaItem } from './MeetupAgendaItem.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',

  template: `
    <div>
        <h3>Программа</h3>
        <div class="meetup-agenda">
            <div v-for="agendaItem of agenda" :key="agenda.id">
              <meetup-agenda-item :agendaItem="agendaItem"></meetup-agenda-item>
            </div>
        </div>
    </div>`,

  components: {
    MeetupAgendaItem,
  },

  props: {
    agenda: {
      type: Array,
      required: false,
    },
  },
};
