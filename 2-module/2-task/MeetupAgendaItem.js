export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template: `
    <div class="meetup-agenda__item">
        <div class="meetup-agenda__item-col">
            <img class="icon" alt="icon" :src="agendaItem.icon"/>
        </div>
        <div class="meetup-agenda__item-col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
        <div class="meetup-agenda__item-col">
            <h5 class="meetup-agenda__title">{{ agendaItem.title }}</h5>
            <template v-if="agendaItem.is_talk">
              <p><span>{{ agendaItem.speaker }}</span><span class="meetup-agenda__dot"></span><span
                class="meetup-agenda__lang">{{ agendaItem.language }}</span></p>
            </template>
            <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
        </div>
    </div>`,

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },
};
