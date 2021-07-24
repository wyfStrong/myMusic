
export default {
  // ranklist_detial列表api
  // 页数还有id在请求时拼接
  getRankListDetail: '/api/mobile/v1/music/rank/',
  // 酷我排行榜更多
  getRankList: '/api/mobile/v1/typelist/rank',
  // radio_detail列表
  getRadioDetail: '/api/mobile/v1/music/album/',
  // album_detail列表
  getAlbumDetail: '/api/mobile/v1/music/album/',

  // 推荐歌单更多
  getPlayList: '/api/mobile/v1/typelist/playlist',
  // playlist最新
  getPlayListNew: '/api/mobile/v1/playlist/rcm/new',
  // 最热
  getPlayListHot: '/api/mobile/v1/playlist/rcm/hot',

  // playlist_detail请求
  getPlaylistDetail: '/api/mobile/v1/music/playlist/',
  // 搜索请求
  getSearchCon: '/api/mobile/v1/search/tip?key=',
  // 请求搜索项详情
  getConDetail: '/api/mobile/v1/search/all?key='
}