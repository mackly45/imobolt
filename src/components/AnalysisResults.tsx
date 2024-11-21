import React from 'react';
import { BarChart2 } from 'lucide-react';

interface Props {
  results: {
    pageCount: number;
    wordCount: number;
    topKeywords: Array<{keyword: string, count: number}>;
    sentiment: number;
    topics: string[];
  };
}

export function AnalysisResults({ results }: Props) {
  return (
    <div className="mt-8 bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Analysis Results</h2>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-gray-50 rounded">
          <div className="text-sm text-gray-500">Page Count</div>
          <div className="text-2xl font-bold">{results.pageCount}</div>
        </div>
        <div className="p-4 bg-gray-50 rounded">
          <div className="text-sm text-gray-500">Word Count</div>
          <div className="text-2xl font-bold">{results.wordCount}</div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-2">Top Keywords</h3>
        <div className="bg-gray-50 p-4 rounded">
          {results.topKeywords.map(({ keyword, count }) => (
            <div key={keyword} className="flex justify-between py-1">
              <span>{keyword}</span>
              <span className="text-gray-500">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-2">Sentiment Analysis</h3>
        <div className="bg-gray-50 p-4 rounded">
          <div className="flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${results.sentiment * 100}%` }}
              ></div>
            </div>
            <span className="ml-2">{(results.sentiment * 100).toFixed(0)}%</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Detected Topics</h3>
        <div className="flex flex-wrap gap-2">
          {results.topics.map(topic => (
            <span
              key={topic}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}