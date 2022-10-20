import { reactive } from "vue";
import airtable from "./airtable";

export const notices = reactive<{
  loading: boolean;
  data: Notice[];
}>({
  loading: true,
  data: [],
});

export async function fetchNotices() {
  notices.loading = true;
  try {
    const { data } = await airtable.get("/tbljIfb3qrPNFS0og", {
      params: {
        view: "Grid view",
      },
    });

    notices.data = data.records;
  } catch (error) {
    console.error(error);
  } finally {
    notices.loading = false;
  }
}
