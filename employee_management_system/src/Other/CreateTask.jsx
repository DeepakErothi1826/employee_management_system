import React from 'react'

const CreateTask = () => {
  return (
    <div>
       <div className="max-w-4xl mx-auto mt-10">
                <div className="bg-black rounded-2xl shadow-sm border border-gray-200 p-8">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">
                        Create New Task
                    </h1>

                    <form className="space-y-6">
                        {/* Task Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Task Title
                            </label>
                            <input
                                type="text"
                                placeholder="Make a UI design"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Describe the task in detail..."
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                            />
                        </div>

                        {/* Grid fields */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Date */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Due Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full rounded-lg border border-gray-300 bg-gray-500 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            {/* Assign To */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Assign To
                                </label>
                                <input
                                    type="text"
                                    placeholder="Employee name"
                                    className="w-full rounded-lg border border-gray-300 bg-gray-500 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Category
                                </label>
                                <input
                                    type="text"
                                    placeholder="Development, Design, etc."
                                    className="w-full rounded-lg border border-gray-300 bg-gray-500 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                        </div>

                        {/* Action */}
                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                            >
                                Create Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default CreateTask
