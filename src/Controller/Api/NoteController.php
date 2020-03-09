<?php


namespace App\Controller\Api;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class NoteController
 * @package App\Controller\Api
 * @Route("/api/note")
 */
class NoteController extends AbstractController
{
    /**
     * @Route("/", name="api.note.index", methods={"GET"})
     */
    public function index(): JsonResponse
    {
        $notes = [
            "-M1yPKGe0vRe4QOk6Ljd" => [
                "date" => "2020-03-09T08:28:57.695Z",
                "title" => "Купить хлеб"
            ],
            "-M1yPKGe0vRe4QOk6Ljf" => [
                "date" => "2020-03-09T08:28:57.695Z",
                "title" => "Купить гитару"
            ],
            "-M1yPKGe0vRe4QOk6Ljs" => [
                "date" => "2020-03-09T08:28:57.695Z",
                "title" => "Купить что-то"
            ],
        ];
        return $this->json($notes, 200);
    }

    /**
     * @Route("/new", name="api.note.new", methods={"POST"})
     */
    public function new(): JsonResponse
    {
        return $this->json(["message" => "success"], 200);
    }

    /**
     * @Route("/{id}", name="api.note.show", methods={"GET"})
     * @param string $id
     * @return JsonResponse
     */
    public function show(string $id): JsonResponse
    {
        $notes = [
            "-M1yPKGe0vRe4QOk6Ljd" => [
                "date" => "2020-03-09T08:28:57.695Z",
                "title" => "Купить хлеб"
            ],
            "-M1yPKGe0vRe4QOk6Ljf" => [
                "date" => "2020-03-09T08:28:57.695Z",
                "title" => "Купить гитару"
            ],
            "-M1yPKGe0vRe4QOk6Ljs" => [
                "date" => "2020-03-09T08:28:57.695Z",
                "title" => "Купить что-то"
            ],
        ];
        return $this->json(isset($notes[$id]) ? [$id => $notes[$id]] : ["message" => "not found"], 200);
    }

    /**
     * @Route("/{id}/edit", name="api.note.edit", methods={"GET","POST"})
     * @param string $id
     * @return JsonResponse
     */
    public function edit(string $id): JsonResponse
    {
        return $this->json(["message" => "success edit '" . $id . "'"], 200);
    }

    /**
     * @Route("/{id}", name="api.note.delete", methods={"DELETE"})
     * @param string $id
     * @return JsonResponse
     */
    public function delete(string $id): JsonResponse
    {
        return $this->json(["message" => "success delete " . $id], 200);
    }
}