export const useNewsStore = defineStore('news', () => {
    type LatestNew = {
      _id: string
      title: string
      description: string
      image: string
      createdAt: string
      updatedAt: string
    }

    const latestNews = ref<LatestNew[]>([])
    const latestNew = ref<LatestNew | null>(null)

    function getLatestNews() {
      // useFetch
      return useAPI('/api/v1/home/news/', {
        method: 'GET',
        body: {},
      }).then(({ data }) => {
        console.log(data)
        latestNews.value = data.value as LatestNew[]
      })
    }

    function getLastestNew(id: string) {
      return useAPI('/api/v1/home/news/' + id, {
        method: 'GET',
        body: {},
      }).then(({ data }) => {
        console.log(data)
        latestNew.value = data.value as LatestNew
      })
    }

    return {
      latestNews,
      latestNew,

      getLatestNews,
      getLastestNew,
    }
})
