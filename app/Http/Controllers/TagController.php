<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class TagController extends Controller
{
    public function create(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $tag = Tag::create($validator->validated());

        return response()->json([
            'success' => true,
            'data' => $tag
        ], 201);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $tag = Tag::find($id);

        if (!$tag) {
            return response()->json([
                'success' => false,
                'message' => 'Tag not found.'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $tag->update($validator->validated());

        return response()->json([
            'success' => true,
            'data' => $tag
        ]);
    }

    public function delete($id): JsonResponse
    {
        $tag = Tag::find($id);

        if (!$tag) {
            return response()->json([
                'success' => false,
                'message' => 'Tag not found.'
            ], 404);
        }

        $tag->delete();

        return response()->json([
            'success' => true,
            'message' => 'Tag deleted successfully.'
        ]);
    }

}
