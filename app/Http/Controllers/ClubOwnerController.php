<?php

namespace App\Http\Controllers;
use App\Models\SportClub;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ClubOwnerController extends Controller
{
    public function Home(): Response
    {
        return Inertia::render('ClubOwner/ClubOwnerPage', [
            "clubs" => SportClub::where("user_id", "=", auth()->user()->id)->get(),
            "name" => auth()->user()->name,
        ]);
    }

    public function ClubAdd(): Response
    {
        return Inertia::render('ClubOwner/AddClubPage');
    }

    public function ClubEdit($id)
    {
        $club = SportClub::get($id);

        if ($club->user_id != auth()->user()->id) {
            return Inertia::location('/');
        }

        return Inertia::render('ClubOwner/EditClubPage', [
            "club" => SportClub::get($id),
        ]);
    }

    public function DeleteClub($id)
    {
        $club = SportClub::get($id);

        if ($club->user_id != auth()->user()->id) {
            return Inertia::location('/');
        }

        $club->delete();
        return Redirect::route('dashboard');
    }

    public function Update(Request $request)
    {
        Log::info($request);
        $data = $request->all();

        if (isset($data['id'])) {
            $sportClub = SportClub::find($data['id']);
            if (!$sportClub || $sportClub->user_id !== Auth::id()) {
                return Inertia::location('/');
            }
        } else {
            $sportClub = new SportClub();
        }

        $sportClub->fill($data);
        $sportClub->save();

        if (isset($data['address'])) {
            $sportClub->address()->updateOrCreate(
                ['id' => $data['address']['id'] ?? null],
                $data['address']
            );
        }

        Log::info($sportClub);

        return $this->ClubEdit($sportClub->id);
    }
}
