var jobID;
//var furl = 'https://api.havenondemand.com/1/api/async/recognizespeech/v2?url=https%3A%2F%2Fwww.havenondemand.com%2Fsample-content%2Fvideos%2Fhpnext.mp4&language_model=en-us&apikey=690c5e3e-6517-45b2-b340-9eaa372d63e7';
// TEST EN LOCAL: 'https://api.havenondemand.com/1/api/async/recognizespeech/v2?file=@MacronGJ&language_model=en-us&apikey=690c5e3e-6517-45b2-b340-9eaa372d63e7'';
//'https://api.havenondemand.com/1/api/async/recognizespeech/v2?url=@MacronGJ&language_model=en-us&apikey=690c5e3e-6517-45b2-b340-9eaa372d63e7';
var APIKEY = '4bf6fe7e-fd9b-47c6-bdc6-38e3b70da60e';
var button = document.getElementById('submit');
var jsonString = '';

var jsonFile = "
  'actions': [
    {
      'result': {
        'source_information': {
          'mime_type': 'video/unknown',
          'audio_information': {
            'codec': 'MP3 (MPEG audio layer 3)',
            'sample_rate': 44100,
            'channels': 2
          }
        },
        'items': [
          {
            'start_time_offset': 0.575,
            'end_time_offset': 0.906,
            'text': 'from',
            'confidence': 91
          },
          {
            'start_time_offset': 0.906,
            'end_time_offset': 1.406,
            'text': 'addressing',
            'confidence': 93
          },
          {
            'start_time_offset': 1.406,
            'end_time_offset': 1.916,
            'text': 'climate',
            'confidence': 69
          },
          {
            'start_time_offset': 1.916,
            'end_time_offset': 2.476,
            'text': 'change',
            'confidence': 70
          },
          {
            'start_time_offset': 2.836,
            'end_time_offset': 3.426,
            'text': 'crisis',
            'confidence': 88
          },
          {
            'start_time_offset': 3.426,
            'end_time_offset': 3.986,
            'text': 'control',
            'confidence': 80
          },
          {
            'start_time_offset': 4.716,
            'end_time_offset': 4.816,
            'text': 'in',
            'confidence': 51
          },
          {
            'start_time_offset': 4.816,
            'end_time_offset': 4.896,
            'text': 'the',
            'confidence': 70
          },
          {
            'start_time_offset': 4.896,
            'end_time_offset': 5.266,
            'text': 'speech',
            'confidence': 76
          },
          {
            'start_time_offset': 5.266,
            'end_time_offset': 5.986,
            'text': 'originally',
            'confidence': 81
          },
          {
            'start_time_offset': 5.986,
            'end_time_offset': 6.326,
            'text': 'aimed',
            'confidence': 73
          },
          {
            'start_time_offset': 6.326,
            'end_time_offset': 6.466,
            'text': 'at',
            'confidence': 64
          },
          {
            'start_time_offset': 6.466,
            'end_time_offset': 6.996,
            'text': 'detailing',
            'confidence': 76
          },
          {
            'start_time_offset': 6.996,
            'end_time_offset': 7.496,
            'text': 'France's',
            'confidence': 82
          },
          {
            'start_time_offset': 7.496,
            'end_time_offset': 7.936,
            'text': 'future',
            'confidence': 80
          },
          {
            'start_time_offset': 7.936,
            'end_time_offset': 8.266,
            'text': 'clean',
            'confidence': 63
          },
          {
            'start_time_offset': 8.266,
            'end_time_offset': 8.686,
            'text': 'energy',
            'confidence': 76
          },
          {
            'start_time_offset': 8.686,
            'end_time_offset': 9.326,
            'text': 'strategy',
            'confidence': 82
          },
          {
            'start_time_offset': 9.826,
            'end_time_offset': 9.916,
            'text': 'the',
            'confidence': 92
          },
          {
            'start_time_offset': 9.916,
            'end_time_offset': 10.196,
            'text': 'French',
            'confidence': 85
          },
          {
            'start_time_offset': 10.196,
            'end_time_offset': 10.676,
            'text': 'president',
            'confidence': 75
          },
          {
            'start_time_offset': 10.676,
            'end_time_offset': 11.236,
            'text': 'began',
            'confidence': 66
          },
          {
            'start_time_offset': 11.326,
            'end_time_offset': 11.486,
            'text': 'with',
            'confidence': 86
          },
          {
            'start_time_offset': 11.486,
            'end_time_offset': 11.576,
            'text': 'the',
            'confidence': 82
          },
          {
            'start_time_offset': 11.576,
            'end_time_offset': 12.086,
            'text': 'highly',
            'confidence': 84
          },
          {
            'start_time_offset': 12.086,
            'end_time_offset': 12.776,
            'text': 'anticipated',
            'confidence': 70
          },
          {
            'start_time_offset': 12.776,
            'end_time_offset': 13.486,
            'text': 'reaction',
            'confidence': 79
          },
          {
            'start_time_offset': 13.766,
            'end_time_offset': 13.906,
            'text': 'to',
            'confidence': 96
          },
          {
            'start_time_offset': 13.906,
            'end_time_offset': 14.016,
            'text': 'the',
            'confidence': 85
          },
          {
            'start_time_offset': 14.016,
            'end_time_offset': 14.276,
            'text': 'so',
            'confidence': 74
          },
          {
            'start_time_offset': 14.276,
            'end_time_offset': 14.596,
            'text': 'called',
            'confidence': 69
          },
          {
            'start_time_offset': 14.596,
            'end_time_offset': 14.916,
            'text': 'yellow',
            'confidence': 84
          },
          {
            'start_time_offset': 14.916,
            'end_time_offset': 15.366,
            'text': 'vests',
            'confidence': 87
          },
          {
            'start_time_offset': 15.366,
            'end_time_offset': 15.906,
            'text': 'movement',
            'confidence': 78
          },
          {
            'start_time_offset': 18.036,
            'end_time_offset': 18.216,
            'text': 'this',
            'confidence': 71
          },
          {
            'start_time_offset': 18.216,
            'end_time_offset': 18.696,
            'text': 'movement',
            'confidence': 93
          },
          {
            'start_time_offset': 18.696,
            'end_time_offset': 18.926,
            'text': 'has',
            'confidence': 76
          },
          {
            'start_time_offset': 18.926,
            'end_time_offset': 19.216,
            'text': 'given',
            'confidence': 91
          },
          {
            'start_time_offset': 19.216,
            'end_time_offset': 19.596,
            'text': 'rise',
            'confidence': 79
          },
          {
            'start_time_offset': 19.596,
            'end_time_offset': 19.736,
            'text': 'to',
            'confidence': 90
          },
          {
            'start_time_offset': 19.736,
            'end_time_offset': 20.136,
            'text': 'major',
            'confidence': 70
          },
          {
            'start_time_offset': 20.136,
            'end_time_offset': 21.176,
            'text': 'demonstrations',
            'confidence': 85
          },
          {
            'start_time_offset': 21.876,
            'end_time_offset': 22.096,
            'text': 'and',
            'confidence': 96
          },
          {
            'start_time_offset': 22.096,
            'end_time_offset': 22.476,
            'text': 'also',
            'confidence': 77
          },
          {
            'start_time_offset': 22.476,
            'end_time_offset': 23.346,
            'text': 'unacceptable',
            'confidence': 77
          },
          {
            'start_time_offset': 23.346,
            'end_time_offset': 23.856,
            'text': 'violence',
            'confidence': 74
          },
          {
            'start_time_offset': 25.966,
            'end_time_offset': 26.106,
            'text': 'I',
            'confidence': 93
          },
          {
            'start_time_offset': 26.106,
            'end_time_offset': 26.246,
            'text': 'have',
            'confidence': 85
          },
          {
            'start_time_offset': 26.246,
            'end_time_offset': 26.956,
            'text': 'understanding',
            'confidence': 87
          },
          {
            'start_time_offset': 26.956,
            'end_time_offset': 27.126,
            'text': 'for',
            'confidence': 92
          },
          {
            'start_time_offset': 27.126,
            'end_time_offset': 27.296,
            'text': 'these',
            'confidence': 83
          },
          {
            'start_time_offset': 27.296,
            'end_time_offset': 27.536,
            'text': 'fellow',
            'confidence': 73
          },
          {
            'start_time_offset': 27.536,
            'end_time_offset': 28.166,
            'text': 'citizens',
            'confidence': 69
          },
          {
            'start_time_offset': 29.176,
            'end_time_offset': 29.356,
            'text': 'but',
            'confidence': 89
          },
          {
            'start_time_offset': 29.356,
            'end_time_offset': 29.466,
            'text': 'I',
            'confidence': 87
          },
          {
            'start_time_offset': 29.466,
            'end_time_offset': 29.626,
            'text': 'will',
            'confidence': 63
          },
          {
            'start_time_offset': 29.626,
            'end_time_offset': 29.936,
            'text': 'not',
            'confidence': 78
          },
          {
            'start_time_offset': 29.936,
            'end_time_offset': 30.136,
            'text': 'give',
            'confidence': 78
          },
          {
            'start_time_offset': 30.166,
            'end_time_offset': 30.696,
            'text': 'anything',
            'confidence': 92
          },
          {
            'start_time_offset': 30.696,
            'end_time_offset': 30.826,
            'text': 'to',
            'confidence': 90
          },
          {
            'start_time_offset': 30.826,
            'end_time_offset': 31.286,
            'text': 'those',
            'confidence': 82
          },
          {
            'start_time_offset': 31.286,
            'end_time_offset': 31.436,
            'text': 'who',
            'confidence': 90
          },
          {
            'start_time_offset': 31.436,
            'end_time_offset': 31.686,
            'text': 'want',
            'confidence': 87
          },
          {
            'start_time_offset': 31.686,
            'end_time_offset': 32.316,
            'text': 'destruction',
            'confidence': 89
          },
          {
            'start_time_offset': 32.316,
            'end_time_offset': 32.606,
            'text': 'and',
            'confidence': 77
          },
          {
            'start_time_offset': 32.645,
            'end_time_offset': 33.166,
            'text': 'disorder',
            'confidence': 72
          },
          {
            'start_time_offset': 33.636,
            'end_time_offset': 33.966,
            'text': 'because',
            'confidence': 88
          },
          {
            'start_time_offset': 33.966,
            'end_time_offset': 34.056,
            'text': 'the',
            'confidence': 96
          },
          {
            'start_time_offset': 34.056,
            'end_time_offset': 34.506,
            'text': 'Republic',
            'confidence': 85
          },
          {
            'start_time_offset': 34.506,
            'end_time_offset': 34.666,
            'text': 'is',
            'confidence': 92
          },
          {
            'start_time_offset': 34.666,
            'end_time_offset': 34.936,
            'text': 'both',
            'confidence': 83
          },
          {
            'start_time_offset': 34.936,
            'end_time_offset': 35.296,
            'text': 'public',
            'confidence': 88
          },
          {
            'start_time_offset': 35.296,
            'end_time_offset': 35.756,
            'text': 'order',
            'confidence': 81
          },
          {
            'start_time_offset': 35.796,
            'end_time_offset': 36.026,
            'text': 'and',
            'confidence': 81
          },
          {
            'start_time_offset': 36.026,
            'end_time_offset': 36.136,
            'text': 'that',
            'confidence': 67
          },
          {
            'start_time_offset': 36.136,
            'end_time_offset': 36.236,
            'text': 'the',
            'confidence': 96
          },
          {
            'start_time_offset': 36.236,
            'end_time_offset': 36.456,
            'text': 'free',
            'confidence': 88
          },
          {
            'start_time_offset': 36.456,
            'end_time_offset': 37.026,
            'text': 'expression',
            'confidence': 92
          },
          {
            'start_time_offset': 37.026,
            'end_time_offset': 37.126,
            'text': 'of',
            'confidence': 87
          },
          {
            'start_time_offset': 37.126,
            'end_time_offset': 37.816,
            'text': 'opinions',
            'confidence': 82
          },
          {
            'start_time_offset': 38.986,
            'end_time_offset': 39.186,
            'text': 'but',
            'confidence': 65
          },
          {
            'start_time_offset': 39.186,
            'end_time_offset': 39.326,
            'text': 'for',
            'confidence': 82
          },
          {
            'start_time_offset': 39.326,
            'end_time_offset': 39.416,
            'text': 'the',
            'confidence': 70
          },
          {
            'start_time_offset': 39.416,
            'end_time_offset': 40.126,
            'text': 'protesters',
            'confidence': 67
          },
          {
            'start_time_offset': 40.126,
            'end_time_offset': 40.236,
            'text': 'who',
            'confidence': 38
          },
          {
            'start_time_offset': 40.236,
            'end_time_offset': 40.816,
            'text': 'demanded',
            'confidence': 82
          },
          {
            'start_time_offset': 40.816,
            'end_time_offset': 40.876,
            'text': 'the',
            'confidence': 87
          },
          {
            'start_time_offset': 40.876,
            'end_time_offset': 41.406,
            'text': 'government',
            'confidence': 81
          },
          {
            'start_time_offset': 41.406,
            'end_time_offset': 41.876,
            'text': 'revolt',
            'confidence': 69
          },
          {
            'start_time_offset': 41.876,
            'end_time_offset': 42.046,
            'text': 'its',
            'confidence': 94
          },
          {
            'start_time_offset': 42.046,
            'end_time_offset': 42.336,
            'text': 'fuel',
            'confidence': 83
          },
          {
            'start_time_offset': 42.336,
            'end_time_offset': 42.856,
            'text': 'tax',
            'confidence': 83
          },
          {
            'start_time_offset': 43.256,
            'end_time_offset': 43.396,
            'text': 'and',
            'confidence': 71
          },
          {
            'start_time_offset': 43.396,
            'end_time_offset': 43.636,
            'text': 'many',
            'confidence': 79
          },
          {
            'start_time_offset': 43.636,
            'end_time_offset': 43.776,
            'text': 'on',
            'confidence': 66
          },
          {
            'start_time_offset': 43.776,
            'end_time_offset': 43.886,
            'text': 'their',
            'confidence': 65
          },
          {
            'start_time_offset': 43.886,
            'end_time_offset': 44.236,
            'text': 'paws',
            'confidence': 78
          },
          {
            'start_time_offset': 44.236,
            'end_time_offset': 44.866,
            'text': 'response',
            'confidence': 72
          },
          {
            'start_time_offset': 45.006,
            'end_time_offset': 45.196,
            'text': 'is',
            'confidence': 93
          },
          {
            'start_time_offset': 45.196,
            'end_time_offset': 45.786,
            'text': 'unlikely',
            'confidence': 88
          },
          {
            'start_time_offset': 45.786,
            'end_time_offset': 45.926,
            'text': 'to',
            'confidence': 87
          },
          {
            'start_time_offset': 45.926,
            'end_time_offset': 46.286,
            'text': 'appease',
            'confidence': 84
          },
          {
            'start_time_offset': 46.286,
            'end_time_offset': 46.536,
            'text': 'their',
            'confidence': 89
          },
          {
            'start_time_offset': 46.536,
            'end_time_offset': 46.956,
            'text': 'anger',
            'confidence': 83
          },
          {
            'start_time_offset': 47.516,
            'end_time_offset': 47.906,
            'text': 'walking',
            'confidence': 82
          },
          {
            'start_time_offset': 47.906,
            'end_time_offset': 47.976,
            'text': 'a',
            'confidence': 31
          },
          {
            'start_time_offset': 47.976,
            'end_time_offset': 48.486,
            'text': 'delicate',
            'confidence': 84
          },
          {
            'start_time_offset': 48.486,
            'end_time_offset': 48.826,
            'text': 'line',
            'confidence': 81
          },
          {
            'start_time_offset': 48.826,
            'end_time_offset': 49.136,
            'text': 'between',
            'confidence': 84
          },
          {
            'start_time_offset': 49.136,
            'end_time_offset': 49.516,
            'text': 'showing',
            'confidence': 58
          },
          {
            'start_time_offset': 49.516,
            'end_time_offset': 49.896,
            'text': 'empathy',
            'confidence': 79
          },
          {
            'start_time_offset': 49.896,
            'end_time_offset': 50.026,
            'text': 'with',
            'confidence': 92
          },
          {
            'start_time_offset': 50.026,
            'end_time_offset': 50.106,
            'text': 'the',
            'confidence': 89
          },
          {
            'start_time_offset': 50.106,
            'end_time_offset': 50.896,
            'text': 'demonstrators',
            'confidence': 82
          },
          {
            'start_time_offset': 51.126,
            'end_time_offset': 51.276,
            'text': 'in',
            'confidence': 92
          },
          {
            'start_time_offset': 51.276,
            'end_time_offset': 51.686,
            'text': 'sticking',
            'confidence': 94
          },
          {
            'start_time_offset': 51.686,
            'end_time_offset': 51.806,
            'text': 'to',
            'confidence': 92
          },
          {
            'start_time_offset': 51.806,
            'end_time_offset': 51.936,
            'text': 'his',
            'confidence': 73
          },
          {
            'start_time_offset': 51.936,
            'end_time_offset': 52.376,
            'text': 'government's',
            'confidence': 80
          },
          {
            'start_time_offset': 52.376,
            'end_time_offset': 52.756,
            'text': 'energy',
            'confidence': 82
          },
          {
            'start_time_offset': 52.756,
            'end_time_offset': 53.406,
            'text': 'strategy',
            'confidence': 83
          },
          {
            'start_time_offset': 53.836,
            'end_time_offset': 53.926,
            'text': 'the',
            'confidence': 89
          },
          {
            'start_time_offset': 53.926,
            'end_time_offset': 54.206,
            'text': 'French',
            'confidence': 74
          },
          {
            'start_time_offset': 54.206,
            'end_time_offset': 54.786,
            'text': 'president',
            'confidence': 79
          },
          {
            'start_time_offset': 54.786,
            'end_time_offset': 55.376,
            'text': 'refused',
            'confidence': 81
          },
          {
            'start_time_offset': 55.376,
            'end_time_offset': 55.526,
            'text': 'to',
            'confidence': 54
          },
          {
            'start_time_offset': 55.526,
            'end_time_offset': 55.956,
            'text': 'announce',
            'confidence': 65
          },
          {
            'start_time_offset': 55.956,
            'end_time_offset': 56.356,
            'text': 'plans',
            'confidence': 79
          },
          {
            'start_time_offset': 56.356,
            'end_time_offset': 56.476,
            'text': 'to',
            'confidence': 55
          },
          {
            'start_time_offset': 56.476,
            'end_time_offset': 57.206,
            'text': 'accelerate',
            'confidence': 78
          },
          {
            'start_time_offset': 57.206,
            'end_time_offset': 57.276,
            'text': 'the',
            'confidence': 81
          },
          {
            'start_time_offset': 57.276,
            'end_time_offset': 57.826,
            'text': 'transition',
            'confidence': 78
          },
          {
            'start_time_offset': 57.826,
            'end_time_offset': 57.906,
            'text': 'to',
            'confidence': 44
          },
          {
            'start_time_offset': 57.906,
            'end_time_offset': 58.206,
            'text': 'clean',
            'confidence': 68
          },
          {
            'start_time_offset': 58.206,
            'end_time_offset': 58.676,
            'text': 'energy',
            'confidence': 77
          },
          {
            'start_time_offset': 59.716,
            'end_time_offset': 59.856,
            'text': 'would',
            'confidence': 73
          },
          {
            'start_time_offset': 59.856,
            'end_time_offset': 59.996,
            'text': 'have',
            'confidence': 70
          },
          {
            'start_time_offset': 59.996,
            'end_time_offset': 60.246,
            'text': 'all',
            'confidence': 47
          },
          {
            'start_time_offset': 60.246,
            'end_time_offset': 60.506,
            'text': 'got',
            'confidence': 70
          },
          {
            'start_time_offset': 60.506,
            'end_time_offset': 60.686,
            'text': 'on',
            'confidence': 79
          },
          {
            'start_time_offset': 60.806,
            'end_time_offset': 60.956,
            'text': 'we',
            'confidence': 67
          },
          {
            'start_time_offset': 60.956,
            'end_time_offset': 61.296,
            'text': 'must',
            'confidence': 81
          },
          {
            'start_time_offset': 61.296,
            'end_time_offset': 61.686,
            'text': 'therefore',
            'confidence': 83
          },
          {
            'start_time_offset': 61.686,
            'end_time_offset': 61.916,
            'text': 'your',
            'confidence': 52
          },
          {
            'start_time_offset': 61.916,
            'end_time_offset': 62.406,
            'text': 'people's',
            'confidence': 74
          },
          {
            'start_time_offset': 62.406,
            'end_time_offset': 62.796,
            'text': 'anger',
            'confidence': 84
          },
          {
            'start_time_offset': 62.796,
            'end_time_offset': 63.006,
            'text': 'and',
            'confidence': 91
          },
          {
            'start_time_offset': 63.006,
            'end_time_offset': 63.516,
            'text': 'alarm',
            'confidence': 83
          },
          {
            'start_time_offset': 64.056,
            'end_time_offset': 64.196,
            'text': 'but',
            'confidence': 68
          },
          {
            'start_time_offset': 64.196,
            'end_time_offset': 64.295,
            'text': 'we',
            'confidence': 79
          },
          {
            'start_time_offset': 64.295,
            'end_time_offset': 64.556,
            'text': 'must',
            'confidence': 92
          },
          {
            'start_time_offset': 64.556,
            'end_time_offset': 64.765,
            'text': 'not',
            'confidence': 87
          },
          {
            'start_time_offset': 64.765,
            'end_time_offset': 64.936,
            'text': 'do',
            'confidence': 91
          },
          {
            'start_time_offset': 64.936,
            'end_time_offset': 65.186,
            'text': 'so',
            'confidence': 82
          },
          {
            'start_time_offset': 65.186,
            'end_time_offset': 65.386,
            'text': 'by',
            'confidence': 84
          },
          {
            'start_time_offset': 65.386,
            'end_time_offset': 65.946,
            'text': 'renouncing',
            'confidence': 83
          },
          {
            'start_time_offset': 65.946,
            'end_time_offset': 66.046,
            'text': 'our',
            'confidence': 55
          },
          {
            'start_time_offset': 66.046,
            'end_time_offset': 66.996,
            'text': 'responsibilities',
            'confidence': 85
          },
          {
            'start_time_offset': 66.996,
            'end_time_offset': 67.166,
            'text': 'for',
            'confidence': 89
          },
          {
            'start_time_offset': 67.166,
            'end_time_offset': 67.496,
            'text': 'today',
            'confidence': 90
          },
          {
            'start_time_offset': 67.496,
            'end_time_offset': 67.666,
            'text': 'and',
            'confidence': 79
          },
          {
            'start_time_offset': 67.666,
            'end_time_offset': 68.096,
            'text': 'tomorrow',
            'confidence': 82
          },
          {
            'start_time_offset': 68.716,
            'end_time_offset': 69.066,
            'text': 'because',
            'confidence': 82
          },
          {
            'start_time_offset': 69.066,
            'end_time_offset': 69.206,
            'text': 'there',
            'confidence': 73
          },
          {
            'start_time_offset': 69.206,
            'end_time_offset': 69.306,
            'text': 'is',
            'confidence': 78
          },
          {
            'start_time_offset': 69.306,
            'end_time_offset': 69.616,
            'text': 'also',
            'confidence': 56
          },
          {
            'start_time_offset': 69.616,
            'end_time_offset': 69.716,
            'text': 'an',
            'confidence': 89
          },
          {
            'start_time_offset': 69.716,
            'end_time_offset': 70.476,
            'text': 'environmental',
            'confidence': 80
          },
          {
            'start_time_offset': 70.476,
            'end_time_offset': 70.846,
            'text': 'Allaah',
            'confidence': 82
          },
          {
            'start_time_offset': 71.336,
            'end_time_offset': 71.556,
            'text': 'I',
            'confidence': 94
          },
          {
            'start_time_offset': 71.556,
            'end_time_offset': 71.696,
            'text': 'would',
            'confidence': 89
          },
          {
            'start_time_offset': 71.696,
            'end_time_offset': 71.806,
            'text': 'go',
            'confidence': 60
          },
          {
            'start_time_offset': 71.806,
            'end_time_offset': 72.196,
            'text': 'further',
            'confidence': 79
          },
          {
            'start_time_offset': 72.196,
            'end_time_offset': 72.346,
            'text': 'to',
            'confidence': 92
          },
          {
            'start_time_offset': 72.346,
            'end_time_offset': 72.736,
            'text': 'say',
            'confidence': 85
          },
          {
            'start_time_offset': 73.316,
            'end_time_offset': 73.466,
            'text': 'it',
            'confidence': 86
          },
          {
            'start_time_offset': 73.466,
            'end_time_offset': 73.756,
            'text': 'is',
            'confidence': 87
          },
          {
            'start_time_offset': 73.756,
            'end_time_offset': 73.856,
            'text': 'the',
            'confidence': 81
          },
          {
            'start_time_offset': 73.856,
            'end_time_offset': 74.426,
            'text': 'social',
            'confidence': 89
          },
          {
            'start_time_offset': 74.456,
            'end_time_offset': 74.716,
            'text': 'and',
            'confidence': 53
          },
          {
            'start_time_offset': 74.716,
            'end_time_offset': 75.426,
            'text': 'territorial',
            'confidence': 76
          },
          {
            'start_time_offset': 75.426,
            'end_time_offset': 76.026,
            'text': 'inequality',
            'confidence': 72
          },
          {
            'start_time_offset': 76.026,
            'end_time_offset': 76.156,
            'text': 'is',
            'confidence': 83
          },
          {
            'start_time_offset': 76.156,
            'end_time_offset': 76.316,
            'text': 'that',
            'confidence': 92
          },
          {
            'start_time_offset': 76.316,
            'end_time_offset': 76.586,
            'text': 'many',
            'confidence': 93
          },
          {
            'start_time_offset': 76.586,
            'end_time_offset': 76.676,
            'text': 'of',
            'confidence': 79
          },
          {
            'start_time_offset': 76.676,
            'end_time_offset': 76.736,
            'text': 'our',
            'confidence': 7
          },
          {
            'start_time_offset': 76.736,
            'end_time_offset': 77.056,
            'text': 'fellow',
            'confidence': 74
          },
          {
            'start_time_offset': 77.056,
            'end_time_offset': 77.646,
            'text': 'citizens',
            'confidence': 74
          },
          {
            'start_time_offset': 77.646,
            'end_time_offset': 77.826,
            'text': 'are',
            'confidence': 97
          },
          {
            'start_time_offset': 77.826,
            'end_time_offset': 78.136,
            'text': 'rightly',
            'confidence': 93
          },
          {
            'start_time_offset': 78.136,
            'end_time_offset': 78.726,
            'text': 'denouncing',
            'confidence': 88
          },
          {
            'start_time_offset': 78.726,
            'end_time_offset': 79.236,
            'text': 'today',
            'confidence': 92
          },
          {
            'start_time_offset': 79.816,
            'end_time_offset': 80.046,
            'text': 'there're',
            'confidence': 85
          },
          {
            'start_time_offset': 80.046,
            'end_time_offset': 80.356,
            'text': 'often',
            'confidence': 79
          },
          {
            'start_time_offset': 80.356,
            'end_time_offset': 80.886,
            'text': 'coupled',
            'confidence': 73
          },
          {
            'start_time_offset': 80.886,
            'end_time_offset': 81.026,
            'text': 'with',
            'confidence': 95
          },
          {
            'start_time_offset': 81.026,
            'end_time_offset': 81.766,
            'text': 'environmental',
            'confidence': 81
          },
          {
            'start_time_offset': 81.766,
            'end_time_offset': 82.406,
            'text': 'inequality',
            'confidence': 74
          },
          {
            'start_time_offset': 83.366,
            'end_time_offset': 83.546,
            'text': 'of',
            'confidence': 84
          },
          {
            'start_time_offset': 83.546,
            'end_time_offset': 83.716,
            'text': 'You're',
            'confidence': 54
          },
          {
            'start_time_offset': 83.716,
            'end_time_offset': 84.026,
            'text': 'not',
            'confidence': 54
          },
          {
            'start_time_offset': 84.906,
            'end_time_offset': 85.466,
            'text': 'still',
            'confidence': 81
          },
          {
            'start_time_offset': 85.516,
            'end_time_offset': 85.616,
            'text': 'the',
            'confidence': 86
          },
          {
            'start_time_offset': 85.616,
            'end_time_offset': 85.946,
            'text': 'French',
            'confidence': 74
          },
          {
            'start_time_offset': 85.946,
            'end_time_offset': 86.586,
            'text': 'president',
            'confidence': 67
          },
          {
            'start_time_offset': 86.586,
            'end_time_offset': 86.896,
            'text': 'did',
            'confidence': 91
          },
          {
            'start_time_offset': 86.896,
            'end_time_offset': 87.216,
            'text': 'offer',
            'confidence': 59
          },
          {
            'start_time_offset': 87.216,
            'end_time_offset': 88.056,
            'text': 'concessions',
            'confidence': 85
          },
          {
            'start_time_offset': 88.786,
            'end_time_offset': 88.906,
            'text': 'he',
            'confidence': 59
          },
          {
            'start_time_offset': 88.906,
            'end_time_offset': 89.276,
            'text': 'vowed',
            'confidence': 84
          },
          {
            'start_time_offset': 89.276,
            'end_time_offset': 89.426,
            'text': 'to',
            'confidence': 45
          },
          {
            'start_time_offset': 89.426,
            'end_time_offset': 89.806,
            'text': 'review',
            'confidence': 92
          },
          {
            'start_time_offset': 89.806,
            'end_time_offset': 90.176,
            'text': 'diesel',
            'confidence': 84
          },
          {
            'start_time_offset': 90.176,
            'end_time_offset': 90.676,
            'text': 'taxis',
            'confidence': 86
          },
          {
            'start_time_offset': 90.676,
            'end_time_offset': 91.376,
            'text': 'regularly',
            'confidence': 78
          },
          {
            'start_time_offset': 91.406,
            'end_time_offset': 91.516,
            'text': 'in',
            'confidence': 76
          },
          {
            'start_time_offset': 91.516,
            'end_time_offset': 92.246,
            'text': 'consideration',
            'confidence': 82
          },
          {
            'start_time_offset': 92.246,
            'end_time_offset': 92.366,
            'text': 'of',
            'confidence': 97
          },
          {
            'start_time_offset': 92.366,
            'end_time_offset': 92.456,
            'text': 'the',
            'confidence': 95
          },
          {
            'start_time_offset': 92.456,
            'end_time_offset': 92.856,
            'text': 'global',
            'confidence': 65
          },
          {
            'start_time_offset': 92.886,
            'end_time_offset': 93.176,
            'text': 'oil',
            'confidence': 86
          },
          {
            'start_time_offset': 93.176,
            'end_time_offset': 93.656,
            'text': 'market',
            'confidence': 92
          },
          {
            'start_time_offset': 94.306,
            'end_time_offset': 94.756,
            'text': 'McCaw',
            'confidence': 61
          },
          {
            'start_time_offset': 94.756,
            'end_time_offset': 95.106,
            'text': 'also',
            'confidence': 65
          },
          {
            'start_time_offset': 95.106,
            'end_time_offset': 95.456,
            'text': 'called',
            'confidence': 76
          },
          {
            'start_time_offset': 95.456,
            'end_time_offset': 95.626,
            'text': 'for',
            'confidence': 79
          },
          {
            'start_time_offset': 95.626,
            'end_time_offset': 95.686,
            'text': 'a',
            'confidence': 76
          },
          {
            'start_time_offset': 95.686,
            'end_time_offset': 96.006,
            'text': 'three',
            'confidence': 97
          },
          {
            'start_time_offset': 96.006,
            'end_time_offset': 96.316,
            'text': 'month',
            'confidence': 84
          },
          {
            'start_time_offset': 96.316,
            'end_time_offset': 96.566,
            'text': 'long',
            'confidence': 91
          },
          {
            'start_time_offset': 96.566,
            'end_time_offset': 97.126,
            'text': 'international',
            'confidence': 82
          },
          {
            'start_time_offset': 97.126,
            'end_time_offset': 98.166,
            'text': 'consultation',
            'confidence': 74
          },
          {
            'start_time_offset': 98.526,
            'end_time_offset': 98.676,
            'text': 'to',
            'confidence': 94
          },
          {
            'start_time_offset': 98.676,
            'end_time_offset': 98.906,
            'text': 'better',
            'confidence': 88
          },
          {
            'start_time_offset': 98.906,
            'end_time_offset': 99.346,
            'text': 'address',
            'confidence': 86
          },
          {
            'start_time_offset': 99.346,
            'end_time_offset': 99.446,
            'text': 'the',
            'confidence': 59
          },
          {
            'start_time_offset': 99.446,
            'end_time_offset': 99.686,
            'text': 'yellow',
            'confidence': 62
          },
          {
            'start_time_offset': 99.686,
            'end_time_offset': 99.986,
            'text': 'vest',
            'confidence': 82
          },
          {
            'start_time_offset': 99.986,
            'end_time_offset': 100.386,
            'text': 'movements',
            'confidence': 73
          },
          {
            'start_time_offset': 100.386,
            'end_time_offset': 100.846,
            'text': 'anger',
            'confidence': 74
          },
          {
            'start_time_offset': 101.286,
            'end_time_offset': 101.426,
            'text': 'and',
            'confidence': 55
          },
          {
            'start_time_offset': 101.426,
            'end_time_offset': 101.506,
            'text': 'to',
            'confidence': 97
          },
          {
            'start_time_offset': 101.506,
            'end_time_offset': 101.806,
            'text': 'work',
            'confidence': 80
          },
          {
            'start_time_offset': 101.806,
            'end_time_offset': 102.116,
            'text': 'towards',
            'confidence': 53
          },
          {
            'start_time_offset': 102.116,
            'end_time_offset': 102.906,
            'text': 'concrete',
            'confidence': 72
          },
          {
            'start_time_offset': 102.906,
            'end_time_offset': 103.686,
            'text': 'solutions',
            'confidence': 71
          }
        ]
      },
      'headers': {},
      'status': 'finished',
      'action': 'recognizespeech',
      'version': 'v2'
    }
  ],
  'jobID': 'w-eu_3e993fdb-374f-4f81-ab2c-d805c28ac7bb',
  'status': 'finished'
}";
//tableau de mots
var mots = [];

function affichageSec(){
	//disparition et appararition des components
	var myNode = document.getElementById('firstI');
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
	document.getElementById('secondI').style.display = 'inline';
	
	var obj = JSON.parse(jsonFile, function (key, value) {
	  if (key == 'text') {
		jsonString = jsonString + value + ' ';
		mots[i] = value;
		i = i + 1;
	  }
	});
	console.log(jsonString);
	document.getElementById('message').value = jsonString;
}


function getData(){
	var loc = document.getElementById('locale').value;
	if (document.getElementById('url').value == ''){
		getJobFile(loc);
	}else {
		var url = document.getElementById('url').value;
		getJobIdUrl(url, loc);
	}
}

// Recuperation du JobID -> URL
function getJobIdUrl(url, loc) {
	document.getElementById('zone').innerHTML = loadingGif;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	  jobID = this.responseText;
	  jobID = jobID.slice(16,jobID.length - 3);
	  console.log(jobID);
	  getJson();
    }
  };
  xhttp.open('POST', 'https://api.havenondemand.com/1/api/async/recognizespeech/v2?url='+url+'&language_model='+loc+'&apikey='+APIKEY, true);
  xhttp.send();
  //ajout sur audio et video
  document.getElementById('video').src = url;
}

// Recuperation du JSON
function getJson() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		reloadResponse(this.responseText);
		document.getElementById('status').value = 'Done!';
		document.getElementById('loading').visibility = 'hidden';
		document.getElementById('zone').innerHTML = '';
		console.log(this.responseText);
		responseText(this.responseText);
		JSONFILE = this.responseText;
    }
  };
  var link = 'https://api.havenondemand.com/1/job/result/' + jobID + '?apikey='+APIKEY;
  xhttp.open('GET', link, true);
  xhttp.send();
}

function reloadResponse(dumb){
	console.log(dumb);
	var i = 0;
	//disparition et appararition des components
	var myNode = document.getElementById('firstI');
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
	document.getElementById('secondI').style.display = 'inline';
	
	//parsage JSON
	var obj = JSON.parse(dumb, function (key, value) {
	  if (key == 'text') {
		jsonString = jsonString + value + ' ';
		mots[i] = value;
		i = i + 1;
	  }
	});
	console.log(jsonString);
	document.getElementById('message').value = jsonString;
}

function getJobFile(locale){
	document.getElementById('zone').innerHTML = loadingGif;
	var file_data = $('#fichier').prop('files')[0];
	var form_data = new FormData();    
	form_data.append('file', file_data);
	$.ajax({
		url: 'https://api.havenondemand.com/1/api/async/recognizespeech/v2?apikey='+APIKEY+'&language_model='+locale,
		type: 'POST',
		data: form_data,
		contentType: false,
		processData: false,
		success: function(responseText){
			getJsonQ(responseText);
		}
	});
	//changement audio et video src puis  test en js pour mettre la visibillity none to block ou inline
	document.getElementById('video').src = file_data;
}

function getJsonQ(job){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById('status').value = 'Done!';
		document.getElementById('loading').visibility = 'hidden';
		document.getElementById('zone').innerHTML = '';
	  console.log(this.responseText);
	  reloadResponse(this.responseText);
	  jsonFile = this.responseText;
	}
	};
	var link = 'https://api.havenondemand.com/1/job/result/' + job['jobID'] + '?apikey='+APIKEY;
	xhttp.open('GET', link, true);
	xhttp.send();
}
