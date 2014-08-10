#pragma strict

var muzzleEffect : GameObject;
var errorAmount : float = 0.001;
var myTarget : Transform;
var muzzlePositions : Transform[];
var turretBall : Transform;

private var nextFireTime : float;
private var nextMoveTime : float;
private var desiredRotation : Quaternion;
private var aimError : float;

function Start () {

}

function Update () {

if (myTarget) {
if (Time.time >= nextMoveTime) {
CalculateAimPosition(myTarget.position);
turretBall.rotation = Quaternion.Lerp(turretBall.rotation, desiredRotation, Time.deltaTime*turn);
}
if (Time.time >= nextFireTime) {
FireProjectile();
}

}