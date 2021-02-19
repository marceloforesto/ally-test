<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    public $timestamps = false;
    protected $fillable = ['name', 'city'];
}
