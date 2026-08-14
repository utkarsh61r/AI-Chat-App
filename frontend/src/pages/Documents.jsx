import { FileText, Upload } from 'lucide-react';

export default function Documents() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Documents</h1>
        <p className="mt-2 text-zinc-400">Upload and manage your documents</p>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-8 text-center">
        <FileText className="mx-auto h-12 w-12 text-zinc-500" />
        <p className="mt-4 text-zinc-400">No documents yet. Upload your first document!</p>
        <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-lime-300 px-4 py-2 font-semibold text-black hover:bg-lime-200">
          <Upload className="h-4 w-4" />
          Upload Document
        </button>
      </div>
    </div>
  );
}
