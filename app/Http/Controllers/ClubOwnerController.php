<?php

namespace App\Http\Controllers;
use App\Models\Address;
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

    public function ClubNew()
    {
        $club = new SportClub();
        $club->address = new Address();
        return Inertia::render('ClubOwner/EditClubPage', [
            "club" => $club,
        ]);
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


        $address = null;

        if (isset($data['address'])) {
            $addressData = $data['address'];
            $address = Address::updateOrCreate(
                ['id' => $addressData['id'] ?? null],
                $addressData
            );
        }

        $sportClub->fill($data);
        $sportClub->address_id = $address->id;
        $sportClub->user_id = auth()->user()->id;
        $sportClub->save();

        Log::info($sportClub);

        return Inertia::location('/club/' . $sportClub->id);
    }

}
