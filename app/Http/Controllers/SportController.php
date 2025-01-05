<?php

namespace App\Http\Controllers;

use App\Models\Sport;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class SportController extends Controller
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

        $sport = Sport::create($validator->validated());

        return response()->json([
            'success' => true,
            'data' => $sport
        ], 201);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $sport = Sport::find($id);

        if (!$sport) {
            return response()->json([
                'success' => false,
                'message' => 'Sport not found.'
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

        $sport->update($validator->validated());

        return response()->json([
            'success' => true,
            'data' => $sport
        ]);
    }

    public function delete($id): JsonResponse
    {
        $sport = Sport::find($id);

        if (!$sport) {
            return response()->json([
                'success' => false,
                'message' => 'Sport not found.'
            ], 404);
        }

        $sport->delete();

        return response()->json([
            'success' => true,
            'message' => 'Sport deleted successfully.'
        ]);
    }
}
