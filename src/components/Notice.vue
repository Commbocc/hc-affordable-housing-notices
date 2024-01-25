<script setup lang="ts">
import { notices } from "../lib/notices";
</script>

<template>
  <div class="accordion mt-2" id="accordionAffordable">
    <template v-for="(notice, i) in notices.data">
      <div v-if="notice.fields.ApprovedByPRSWeb" class="accordion-item">
        <div>
          <h2 class="accordion-header" :id="`header-${i}`">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapse-${i}`"
              aria-expanded="false"
              :aria-controls="`collapse-${i}`"
            >
              <strong>
                {{ notice.fields.Name }} - Available Until

                {{
                  new Date(notice.fields.AvailableUntilDate).toLocaleDateString(
                    "en-US",
                    { timeZone: "UTC" },
                  )
                }}

                <span v-if="notice.fields.SpanishVersion === 'Yes'">
                  &nbsp;(English and Spanish)
                </span>
              </strong>
            </button>
          </h2>

          <div
            :id="`collapse-${i}`"
            class="accordion-collapse collapse"
            :aria-labelledby="`header-${i}`"
          >
            <div class="accordion-body">
              <p>
                <strong>Description: </strong>{{ notice.fields.Description }}
              </p>

              <p>
                <strong>Contact: </strong>For more information, contact

                <a :href="`mailto:${notice.fields.ContactEmail}`">
                  {{ notice.fields.ContactName }}
                </a>

                or call {{ notice.fields.ContactPhone }}
              </p>

              <p>
                <strong>View or download notice: </strong>

                <a :href="notice.fields.Attachment[0].url" target="_blank">
                  {{ notice.fields.Name }}
                </a>
              </p>

              <div v-if="notice.fields.SpanishVersion === 'Yes'">
                <hr />

                <p>
                  <strong>
                    {{ notice.fields.SpanishName }} - disponible para
                    comentarios públicos hasta

                    {{
                      new Date(
                        notice.fields.AvailableUntilDate,
                      ).toLocaleDateString("en-US", { timeZone: "UTC" })
                    }}
                  </strong>
                </p>

                <p>
                  <strong>Descripción: </strong>
                  {{ notice.fields.SpanishDescription }}
                </p>

                <p>
                  <strong>Contacto: </strong>Para mas informacion, contacte

                  <a :href="`mailto:${notice.fields.ContactEmail}`">
                    {{ notice.fields.ContactName }}
                  </a>

                  or call {{ notice.fields.ContactPhone }}
                </p>

                <p>
                  <strong>Ver o descargar aviso: </strong>

                  <a
                    :href="notice.fields.SpanishAttachment[0].url"
                    target="_blank"
                  >
                    {{ notice.fields.SpanishName }}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
